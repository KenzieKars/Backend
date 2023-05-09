import * as yup from 'yup';

const commentSerializer = yup.object().shape({
	comentario: yup.string().required(),
    editado: yup.boolean().notRequired()
});

export {
	commentSerializer
};