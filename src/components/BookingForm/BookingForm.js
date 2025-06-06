import { Formik, Form, useField } from 'formik';
import './BookingForm.css';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const MyTextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


const MyCheckbox = ({ children, ...props}) => {
    const [field, meta] = useField({ ...props, type: 'checkbox'})
    return (
        <div className='form-group'>
            <input id={field.name} className='checkbox-input' type='checkbox' {...field} {...props}/>
            <label className='form-label checkbox-label' htmlFor={field.name}>{children}</label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor={props.id || props.name}>{label}</label>
            <select className='select-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default function BookingForm() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    numberOfGuests: '',
                    bookingDate: '',
                    timeSlot: '', 
                    occasion: '',
                    acceptedTerms: false,
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    numberOfGuests: Yup.number()
                        .min(1, 'Must be at least 1 guest')
                        .max(10, 'Must be less than 10 guests')
                        .required('Required'),
                    bookingDate: Yup.date()
                        .required('Required'),
                    timeSlot: Yup.string()
                        .oneOf(
                        ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
                        'Invalid Time Slot'
                        )
                        .required('Required'),
                    occasion: Yup.string()
                        .required('Required')
                        .oneOf(
                            ['Birthday', 'Anniversary', 'Business Meeting', 'Engagement', 'Other'],
                            'Invalid Occasion'
                        ),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        const reservationData = {
                            ...values,
                            bookingDate: new Date(values.bookingDate)
                        };
                        navigate('/booking-confirmation', { state: { reservationDetails: reservationData } });
                    }, 400);
                }}
            >
                <Form>

                    <div className='form-group-col'>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Jhon"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jhon@email.com"
                    />

                    <MyTextInput
                        label="Number of Guests"
                        name="numberOfGuests"
                        type="number"
                        placeholder="1"
                    />

                    <div className='form-group-col'>
                        <MyTextInput
                            label="Booking Date"
                            name="bookingDate"
                            type="date"
                            placeholder="2025-01-01"
                        />

                        <MySelect label="Time Slot" name="timeSlot">
                            <option value="">Select a time slot</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </MySelect>
                    </div>
                    
                    <MySelect label="Occasion" name="occasion">
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Business Meeting">Business Meeting</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Other">Other</option>
                    </MySelect>

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button className='btn btn-reservation' type="submit">Make Reservation</button>
                    {/* <button type="reset">Reset</button> */}
                </Form>
            </Formik>
        </>
    );
}