import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styles from './styles.module.scss';
import { SendFormBtn } from '@/features/send-form';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import { useBecamePartnerMutation } from '@/widgets/parters/api/api';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';

interface FormData {
  partnerName: string;
  partnerType: string;
  directorFirstName: string;
  directorLastName: string;
  directorMiddleName: string;
  directorPhoneNumber: string;
  directorEmail: string;
  cooperationGoal: string;
  siteUrl: string;
  legalAddress: string;
  identificationCode: string;
  logo: File[];
}


const PartnerForm = () => {
  const { t } = useTranslation();
  const options = [
    { value: 'LEGAL_ENTITY', label: t('typeJurid') },
    { value: 'FOP', label: t('typeFop') },
    { value: 'PUBLIC_ORGANIZATION', label: t('typePublic') },
  ];

  const { control, register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormData>();

  const [submitForm, { isLoading }] = useBecamePartnerMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('partnerName', data.partnerName);
      formData.append('partnerType', data.partnerType);
      formData.append('directorFirstName', data.directorFirstName);
      formData.append('directorLastName', data.directorLastName);
      formData.append('directorMiddleName', data.directorMiddleName);
      formData.append('directorPhoneNumber', data.directorPhoneNumber);
      formData.append('directorEmail', data.directorEmail);
      formData.append('cooperationGoal', data.cooperationGoal);
      formData.append('siteUrl', data.siteUrl);
      formData.append('legalAddress', data.legalAddress);
      formData.append('identificationCode', data.identificationCode);
      if (data.logo) {
        formData.append('logo', data.logo[0]); // Звертаємо увагу, що avatar — масив файлів
      }
      // Відправка даних через RTK Query
      await submitForm(formData).unwrap();

      // toast.success(t('formSuccess')); // Успішне повідомлення

      // Очищення всіх полів форми
      reset();
    } catch (error) {
      alert(`Failed to sent form: ${(error as any).data.error}`);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>{t('formPartTitle')}</h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('nameOrg')}</h6>
              <input
                className={styles.formInput}
                placeholder={t('enterSome')}
                {...register('partnerName', { required: t('errorInput') })}
              />
              {errors.partnerName && <span style={{color: 'red'}}>{errors.partnerName.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('typePart')}</h6>
              <Controller
                name="partnerType"
                control={control}
                rules={{ required: t('errorInput') }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="..."
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption?.value)
                    }
                    value={options.find(
                      (option) => option.value === field.value
                    )}
                  />
                )}
              />
              {errors.partnerType && <span style={{color: 'red'}}>{errors.partnerType.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('contactsDir')}</h6>
              <input
                className={styles.formInput}
                placeholder={t('formLastname')}
                style={{marginBottom: '10px'}}
                {...register('directorFirstName', { required: t('errorInput'), pattern: {
                  value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                  message: t("errorText"),
                }, })}
              />
              {errors.directorFirstName && <span style={{color: 'red', display: 'inline-block', marginBottom: '16px'}}>{errors.directorFirstName.message}</span>}
              <input
                className={styles.formInput}
                style={{marginBottom: '10px'}}
                placeholder={t('formFirstname')}
                {...register('directorLastName', { required: t('errorInput'), pattern: {
                  value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                  message: t("errorText"),
                }, })}
              />
              {errors.directorLastName && <span style={{color: 'red', display: 'inline-block', marginBottom: '16px'}}>{errors.directorLastName.message}</span>}
              <input
                className={styles.formInput}
                placeholder={t('formMiddlename')}
                style={{marginBottom: '10px'}}
                {...register('directorMiddleName', { required: t('errorInput'), pattern: {
                  value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                  message: t("errorText"),
                }, })}
              />
              {errors.directorMiddleName && <span style={{color: 'red', display: 'inline-block', marginBottom: '16px'}}>{errors.directorMiddleName.message}</span>}
              <input
                type="tel"
                className={styles.formInput}
                style={{marginBottom: '10px'}}
                placeholder={t('formPhone')}
                {...register('directorPhoneNumber', { required: t('errorTel'), pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: t("errorTel"),
                },
             })}
              />
              {errors.directorPhoneNumber && <span style={{color: 'red', display: 'inline-block', marginBottom: '16px'}}>{errors.directorPhoneNumber.message}</span>}
              <input
                className={styles.formInput}
                placeholder={t('formEmail')}
                type="email"
                {...register('directorEmail', { required: t('errorInput'), pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: t("errorEmail"),
                }, })}
              />
              {errors.directorEmail && <span style={{color: 'red'}}>{errors.directorEmail.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formGoalCoop')}</h6>
              <textarea
                placeholder={t('enterSome')}
                className={styles.formTextarea}
                {...register('cooperationGoal', { required: t('errorInput') })}
              />
              {errors.cooperationGoal && <span style={{color: 'red'}}>{errors.cooperationGoal.message}</span>}
            </label> 

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formLink')}</h6>
              <input
                className={styles.formInput}
                placeholder="https://example.com"
                {...register('siteUrl', { required: t('errorInput') })}
              />
              {errors.siteUrl && <span style={{color: 'red'}}>{errors.siteUrl.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formAddress')}</h6>
              <input
                className={styles.formInput}
                placeholder={t('enterSome')}
                {...register('legalAddress', { required: t('errorInput') })}
              />
              {errors.legalAddress && <span style={{color: 'red'}}>{errors.legalAddress.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formCode')}</h6>
              <input
                className={styles.formInput}
                placeholder={t('enterSome')}
                {...register('identificationCode', { required: t('errorInput'), pattern: {
                  value: /^\d+$/,
                  message: t('errorNumber'),
                }, })}
              />
              {errors.identificationCode && <span style={{color: 'red'}}>{errors.identificationCode.message}</span>}
            </label>
            <label htmlFor="files" className={styles.label}>
              <h6 className={styles.formTitle}>{t('formImf')}</h6>
                <input className={styles.formInput} accept="image/*" type="file" style={{paddingTop: '20px'}}
                {...register('logo', { required: t('errorInput') })}
                />
                {errors.logo && <span style={{color: 'red'}}>{errors.logo.message}</span>}
              </label>
            <SendFormBtn disabled={isLoading || !isValid} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;