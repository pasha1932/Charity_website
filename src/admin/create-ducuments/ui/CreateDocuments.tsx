import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styles from './styles.module.scss';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { useCreateDocumentMutation } from '../../documents-list/api/docupentsApi';

interface FormData {
  fileName: string,
  description: string,
  fileUrl: string,
  category: 'REPORT' | 'FOUNDING';
}

const options = [
  { value: 'REPORT', label: 'Звіти' },
  { value: 'FOUNDING', label: 'Установчі документи' },
];


const CreateDocuments = () => {
  const { control, register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormData>();
  
    const [submitForm, { isLoading }] = useCreateDocumentMutation();
  
    const onSubmit = async (data: FormData) => {
      try {
        const doc = {
          fileName: data.fileName,
          description: data.description,
          fileUrl: data.fileUrl,
          category: data.category,
        }
        // Відправка даних через RTK Query
        await submitForm(doc).unwrap();

        alert('Документ успішно доданий')
        reset();
      } catch (error) {
        alert(`Щось пішло не так: ${(error as any).data?.error || 'Невідома помилка'}`);
      }
  };
  
  return ( 
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>Заповніть форму щоб додати документ</h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Назва файлу</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть назву"
                {...register('fileName', { required: 'Вкажіть назву' })}
              />
              {errors.fileName && <span style={{color: 'red'}}>{errors.fileName.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Опис файлу</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть опис"
                {...register('description', { required: 'Вкажіть опис' })}
              />
              {errors.description && <span style={{color: 'red'}}>{errors.description.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Тип документа</h6>
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Тип документа обов’язковий' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Оберіть тип документа"
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption?.value)
                    }
                    value={options.find(
                      (option) => option.value === field.value
                    )}
                  />
                )}
              />
              {errors.category && <span style={{color: 'red'}}>{errors.category.message}</span>}
            </label>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Посилання на файл</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть посилання"
                {...register('fileUrl', { required: 'Вкажіть посилання' })}
              />
              {errors.fileUrl && <span style={{color: 'red'}}>{errors.fileUrl.message}</span>}
            </label>

            <button disabled={isLoading || !isValid} style={!isValid ? {backgroundColor: 'lightgrey'} : {}} className={styles.btn}>{isLoading ? 'Додавання...' : 'Додати документ'}</button>
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default CreateDocuments;