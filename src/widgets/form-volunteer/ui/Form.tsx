import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Flag from 'react-world-flags';
import styles from './styles.module.scss';
import { SendFormBtn } from '@/features/send-form';
import { useTranslation } from 'react-i18next';

interface FormData {
  firstName: string;
  lastName: string;
  pob: string,
  email: string;
  phoneNumber: string;
  country: { label: string; value: string };
  message: string;
  image: File,
}

const countryOptions = [
  { value: '+1', flag: 'US' },
  { value: '+44', flag: 'GB' },
  { value: '+380', flag: 'UA' },
  { value: '+49', flag: 'DE' },
];

const Form = () => {
  //handleSubmit вниз добавити
  const { control, watch, setValue, register, formState: { errors, isValid  } } = useForm<FormData>({
    defaultValues: {
      phoneNumber: '+380 ', // Початковий код країни Україна
    },
  });
  const { t } = useTranslation();

  // const onSubmit = async (data: FormData) => {

  // };

  const phoneNumber = watch('phoneNumber');

  const handleCountryChange = (selectedOption: any) => {
    setValue('phoneNumber', `${selectedOption.value} ${phoneNumber.replace(/^\+\d+\s*/, '')}`);
  };
  console.log(errors.toString())

  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.title}>{t('please')}</h4>
          <form className={styles.form}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <div className={styles.pair}>
              <label className={styles.label}>
                <h6 className={styles.formTitle}>{t('name')}</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder={t('namepl')} {...register('firstName', { required: t('errorName') })} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
              </label>

              <label className={styles.label}>
                <h6 className={styles.formTitle}>{t('lastName')}</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder={t('lastNamepl')}{...register('lastName', { required: t('errorLast') })} />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>
            </div>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>По батькові</h6>
              <input className={styles.formInput} placeholder="тигранович"  type=""
              {...register('pob', { required: t('errorEmail') })}
              />
              {errors.pob && <span>{errors.pob.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('email')}</h6>
              <input className={styles.formInput} placeholder={t('emailpl')}  type="email"
              {...register('email', { required: t('errorEmail') })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('number')}</h6>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
        {/* Селект із прапорами країн */}
            <Select
              className={styles.select}
              options={countryOptions}
              defaultValue={countryOptions[2]} // Початково Україна
              formatOptionLabel={(e) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Flag code={e.flag} style={{ width: '35px', height: '35px' }} />
                </div>
                )}
                getOptionValue={(e) => e.value}
                onChange={handleCountryChange}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minWidth: 102,
                    height: '100%',
                    backgroundColor: '#ebebeb',
                    border: '1px solid #262626',
                    borderRadius: 12,
                  }),
                }}
              />

                  {/* Поле для введення номера телефону */}
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: 'Вкажіть номер телефону' }}
                render={({ field }) => (
                  <input
                    className={styles.formInput}
                    {...field}
                    placeholder="Введіть номер"
        
                  />
                )}
              />
            </div>
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('message')}</h6>
              <textarea className={`${styles.formInput} ${styles.formTextArea}`} {...register('message')} />
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Картинка</h6>
              <input className={styles.formInput}  type="file"
              {...register('image', { required: t('errorEmail') })}
              />
              {errors.image && <span>{errors.image.message}</span>}
            </label>
            {<SendFormBtn disabled={isValid} />}
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default Form;