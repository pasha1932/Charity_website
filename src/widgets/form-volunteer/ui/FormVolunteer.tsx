import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Flag from 'react-world-flags';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useBecameVolunteerMutation } from '@/widgets/volunteers/api/api';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { Button } from '@/shared/ui/button';

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string,
  email: string;
  phoneNumber: string;
  avatar: File[],
}

const countryOptions = [
  { value: '+1', flag: 'US' },
  { value: '+44', flag: 'GB' },
  { value: '+380', flag: 'UA' },
  { value: '+49', flag: 'DE' },
];

const FormVolunteer = () => {
  const [submitVolunteer, {isLoading}] = useBecameVolunteerMutation();
  const { control, reset, watch, setValue, register, handleSubmit, formState: { errors, isValid  } } = useForm<FormData>({
    defaultValues: {
      phoneNumber: '+380', // Початковий код країни Україна
    },
  });
  const { t } = useTranslation();

  const onSubmit = async (data: FormData) => {
    try {
      // Якщо є файл, формуємо FormData
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('middleName', data.middleName);
      formData.append('email', data.email);
      formData.append('phoneNumber', data.phoneNumber);
      if (data.avatar) {
        formData.append('avatar', data.avatar[0]); // Звертаємо увагу, що avatar — масив файлів
      }

      // Відправка даних через RTK Query
      await submitVolunteer(formData).unwrap();
      
      alert('Ваша заявка була відправлена');
      reset({
        phoneNumber: '+380', // Повертаємо початкове значення коду країни
      });
    } catch  (error) {
      alert(`Failed to sent form: ${(error as any).data.error}`);
      console.log(error);
    }
  };

  const phoneNumber = watch('phoneNumber');

  const handleCountryChange = (selectedOption: any) => {
    setValue('phoneNumber', `${selectedOption.value} ${phoneNumber.replace(/^\+\d+\s*/, '')}`);
  };

  return ( 
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>{t('please')}</h4>
          <form className={styles.form}  onSubmit={handleSubmit(onSubmit)}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <div className={styles.pair}>
              <label className={styles.label}>
                <h6 className={styles.formTitle}>{t('name')}</h6>
                <input  className={`${styles.formInput} ${styles.formInputHalf}`}
                  placeholder={t('enterSome')}
                  {...register('firstName', {
                    required: t('errorInput'),
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                      message: t("errorText"),
                    },
                  })} />
          {errors.firstName && <span style={{color: 'red'}}>{errors.firstName.message}</span>}
              </label>

              <label className={styles.label}>
                <h6 className={styles.formTitle}>{t('lastName')}</h6>
                <input type="text" className={`${styles.formInput} ${styles.formInputHalf}`} placeholder={t('enterSome')}
                  {...register('lastName', {
                    required: t('errorInput'), pattern: {
                      value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                      message: t("errorText"),
                    }, })} />
                {errors.lastName && <span style={{color: 'red'}}>{errors.lastName.message}</span>}
                </label>
            </div>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formMiddlename')}</h6>
              <input type="text" className={styles.formInput} placeholder={t('enterSome')}
              {...register('middleName', { required: t('errorInput'), pattern: {
                value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/i,
                message: t("errorText"),
              }, })}
              />
              {errors.middleName && <span style={{color: 'red'}}>{errors.middleName.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('email')}</h6>
              <input className={styles.formInput} placeholder={t('emailpl')}  type="email"
              {...register('email', { required: t('errorInput'), pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: t("errorEmail"),
              }, })}
              />
              {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
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
                  rules={{ required: t('errorTel'), pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: t("errorTel"),
                  }}}
                render={({ field }) => (
                  <input
                    className={styles.formInput}
                    {...field}
                    type="tel"
        
                  />
                )}
              />
              </div>
              {errors.phoneNumber && <span style={{color: 'red'}}>{errors.phoneNumber.message}</span>}

            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>{t('formImf')}</h6>
              <input className={styles.formInput} type="file" accept="image/*" style={{paddingTop: '20px'}}
              
              {...register('avatar', { required: t('errorInput') })}
              />
              {errors.avatar && <span style={{color: 'red'}}>{errors.avatar.message}</span>}
            </label>
            { <Button variant='usual' disabled={!isValid}>{isLoading ? t('sending') : t('send')}</Button>}
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default FormVolunteer;