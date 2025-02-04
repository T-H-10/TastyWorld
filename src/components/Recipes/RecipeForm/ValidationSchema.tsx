import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('שדה זה הוא חובה')
        .min(3, 'שם המתכון צריך להיות לפחות 3 תווים'),
    description: Yup.string()
        .max(200, 'תיאור המתכון יכול להיות עד 200 תווים'),
    ingredients: Yup.array()
        .of(
            Yup.string()
        )
        .min(2, 'צריך לפחות 2 מצרכים')
        .required('שדה זה הוא חובה'),
    instructions: Yup.string()
        .required('שדה זה הוא חובה')
        .min(10, 'הוראות ההכנה צריכות להיות לפחות 10 תווים'),
});
export default validationSchema;