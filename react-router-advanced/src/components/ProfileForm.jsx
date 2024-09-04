import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import useProfileStore from './profileStore';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
});

const ProfileForm = () => {
    const addProfile = useProfileStore(state => state.addProfile);
    const navigate = useNavigate();

    const handleSubmit = (values, { resetForm }) => {
        addProfile({ id: Date.now(), ...values })
        console.log("Form submitted", values);
        resetForm();
        navigate("/");

        const profiles = useProfileStore.getState().profiles;
        console.log("Profiles", profiles);
    };

    return (
        <Formik
            initialValues={{ name: "", description: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <label>Name:</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name='name' component="div" />
                    </div>
                    <div>
                        <label>Description:</label>
                        <Field name="description" as="textarea" />
                        <ErrorMessage name='description' component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm