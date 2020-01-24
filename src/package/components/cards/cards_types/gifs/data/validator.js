import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const InterestsValidator = formatMessage =>
    Yup.object().shape({
        interests: Yup.array()
            .of(
                Yup.object()
                    .transform(value => ({ ...value, stillEmployed: !value.endDate }))
                    .shape({
                        name: Yup.string()
                            .required(formatMessage(validationTranslations.required))
                            .min(2, formatMessage(validationTranslations.min, { min: 2 }))
                    })
            )
            .required(formatMessage(validationTranslations.required))
    });