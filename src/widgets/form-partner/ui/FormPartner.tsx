import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styles from './styles.module.scss';
import { SendFormBtn } from '@/features/send-form';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import { useBecamePartnerMutation } from '@/widgets/parters/api/api';

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

const partnerTypeOptions = [
  { value: 'juridical', label: 'Юридична особа' },
  { value: 'FOP', label: 'ФОП' },
  { value: 'ngo', label: 'Громадська організація' },
];

const PartnerForm = () => {
  const { t } = useTranslation();
  const { control, register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormData>({
    defaultValues: {
      partnerType: '',
    },
  });

  const [submitForm, { isLoading }] = useBecamePartnerMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('partnerName', data.partnerName);
      formData.append('partnerType', data.partnerType.value);
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
      console.error('Error submitting form:', error);
      // toast.error(t('formError')); // Повідомлення про помилку
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.title}>{t('partnerFormTitle')}</h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Назва організації/компанії</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть назву"
                {...register('partnerName', { required: 'Вкажіть назву організації' })}
              />
              {errors.partnerName && <span>{errors.partnerName.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Тип партнера</h6>
              <Controller
                name="partnerType"
                control={control}
                rules={{ required: 'Оберіть тип партнера' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={partnerTypeOptions}
                    className={styles.select}
                    placeholder="Оберіть тип партнера"
                  />
                )}
              />
              {errors.partnerType && <span>{errors.partnerType.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Контакти директора компанії</h6>
              <input
                className={styles.formInput}
                placeholder="ПІБ"
                {...register('directorFirstName', { required: 'Вкажіть ПІБ директора' })}
              />
              {errors.directorFirstName && <span>{errors.directorFirstName.message}</span>}
              <input
                className={styles.formInput}
                placeholder="Номер телефону"
                {...register('directorPhoneNumber', { required: 'Вкажіть номер телефону директора' })}
              />
              {errors.directorPhoneNumber && <span>{errors.directorPhoneNumber.message}</span>}
              <input
                className={styles.formInput}
                placeholder="Електронна адреса"
                type="email"
                {...register('directorEmail', { required: 'Вкажіть електронну адресу директора' })}
              />
              {errors.directorEmail && <span>{errors.directorEmail.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Мета співпраці</h6>
              <textarea
                className={styles.formTextarea}
                placeholder="Опишіть мету співпраці"
                {...register('cooperationGoal', { required: 'Вкажіть мету співпраці' })}
              />
              {errors.cooperationGoal && <span>{errors.cooperationGoal.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Посилання на соцмережі або сайт</h6>
              <input
                className={styles.formInput}
                placeholder="https://example.com"
                {...register('siteUrl', { required: 'Вкажіть посилання' })}
              />
              {errors.siteUrl && <span>{errors.siteUrl.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Юридична адреса</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть юридичну адресу"
                {...register('legalAddress', { required: 'Вкажіть юридичну адресу' })}
              />
              {errors.legalAddress && <span>{errors.legalAddress.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Ідентифікаційний код (ЄДРПОУ)</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть код ЄДРПОУ"
                {...register('identificationCode', { required: 'Вкажіть код ЄДРПОУ' })}
              />
              {errors.identificationCode && <span>{errors.identificationCode.message}</span>}
            </label>
             <label className={styles.label}>
                          <h6 className={styles.formTitle}>Картинка</h6>
                          <input className={styles.formInput}  type="file"
                          {...register('logo', { required: t('errorEmail') })}
                          />
                          {errors.logo && <span>{errors.logo.message}</span>}
                        </label>
            <SendFormBtn disabled={isLoading || !isValid} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;