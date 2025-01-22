
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import styles from './style.module.scss';
import { SendFormBtn } from "@/features/send-form";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/shared/api/api";

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string,
  email: string;
  password: string;
  repeatPassword: string;
  avatar: File[],
}

const Registration = () => {
  const [submit] = useRegisterMutation();
  const { reset, register, handleSubmit, formState: { errors, isValid  } } = useForm<FormData>({
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Якщо є файл, формуємо FormData
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('middleName', data.middleName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('repeatPassword', data.password);
      if (data.avatar) {
        formData.append('avatar', data.avatar[0]); // Звертаємо увагу, що avatar — масив файлів
      }

      // Відправка даних через RTK Query
      await submit(formData).unwrap();
      
      alert('Ви успішно зареєструвалися');
      reset();
    } catch  (error) {
      console.error('Failed register:', error);
    }
  };

  return ( 
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>Заповніть дані щоб зареєструватися</h4>
          <form className={styles.form}  onSubmit={handleSubmit(onSubmit)}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <div className={styles.pair}>
              <label className={styles.label}>
                <h6 className={styles.formTitle}>Ім'я</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder='Вкажіть ваше ім`я' {...register('firstName', { required: 'Заповніть це поле' })} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
              </label>

              <label className={styles.label}>
                <h6 className={styles.formTitle}>Прізвище</h6>
                <input className={`${styles.formInput} ${styles.formInputHalf}`} placeholder='Вкажіть ваше прізвище'{...register('lastName', { required: 'Заповніть це поле' })} />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>
            </div>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>По батькові</h6>
              <input className={styles.formInput} placeholder="Володимирович"  type="text"
              {...register('middleName', { required: 'Заповніть це поле' })}
              />
              {errors.middleName && <span>{errors.middleName.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Пароль</h6>
              <input className={styles.formInput}  type="password"
              {...register('password', { required: 'Заповніть це поле' })}
              />
              {errors.middleName && <span>{errors.middleName.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Повторіть пароль</h6>
              <input className={styles.formInput}  type="password"
              {...register('repeatPassword', { required: 'Заповніть це поле' })}
              />
              {errors.middleName && <span>{errors.middleName.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Пошта</h6>
              <input className={styles.formInput} placeholder='Вкажіть вашу пошту'  type="email"
              {...register('email', { required: 'Заповніть це поле' })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>
  
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Аватар</h6>
              <input className={styles.formInput}  type="file" style={{paddingTop: '20px'}}
              {...register('avatar', { required: 'Вставте файл' })}
              />
              {errors.avatar && <span>{errors.avatar.message}</span>}
            </label>
            {<SendFormBtn disabled={isValid} />}
          </form>
        </div>
      </div>
    </section>
  )
}
 
export default Registration;