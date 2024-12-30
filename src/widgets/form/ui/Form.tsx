import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Flag from 'react-world-flags';
import styles from './styles.module.scss';
import { SendFormBtn } from '@/features/send-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: { label: string; value: string };
  message: string;
}

const countryOptions = [
  { value: '+1', flag: 'US' },
  { value: '+44', flag: 'GB' },
  { value: '+380', flag: 'UA' },
  { value: '+49', flag: 'DE' },
];

const Form = () => {
  const { control, watch, setValue, register, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      phoneNumber: '+380 ', // Початковий код країни Україна
    },
  });
  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const payload = {
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       phoneNumber:  data.phoneNumber,
  //       message: data.message,
  //     };

  //     // Надсилання даних на бекенд
  //     const response = await axios.post('/api/submit', payload);
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const phoneNumber = watch('phoneNumber');

  const handleCountryChange = (selectedOption: any) => {
    setValue('phoneNumber', `${selectedOption.value} ${phoneNumber.replace(/^\+\d+\s*/, '')}`);
  };

  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.title}>Будь ласка, заповніть форму нижче щоб продовжити</h4>
          <form className={styles.form}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <div className={styles.pair}>
              <label className={styles.label}>
                <h6 className={styles.formTitle}>Ім'я</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder='Степан' {...register('firstName', { required: 'Вкажіть ім’я' })} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
              </label>

              <label className={styles.label}>
                <h6 className={styles.formTitle}>Прізвисько</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder='Шевченко'{...register('lastName', { required: 'Вкажіть прізвище' })} />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>
            </div>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Електронна пошта</h6>
              <input className={styles.formInput} placeholder="stepanshevch@gmail.com"  type="email"
              {...register('email', { required: 'Вкажіть електронну пошту' })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Номер телефону</h6>
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
              <h6 className={styles.formTitle}>Особисте повідомлення *не обовʼязково*</h6>
              <textarea className={`${styles.formInput} ${styles.formTextArea}`} {...register('message')} />
            </label>
            <SendFormBtn />
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default Form;