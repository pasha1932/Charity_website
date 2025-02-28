import styles from './styles.module.scss';
import { useState } from 'react';
import { useCreateProjectMutation } from '@/widgets/projects/api/api';

const CreateProjectForm: React.FC = () => {
  const [createProject] = useCreateProjectMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState<number>();
  const [deadline, setDeadline] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !description || !image || !goalAmount || !deadline || name.length < 10) {
      alert("Please fill in all fields correctly(title length > 10) and upload a cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("goalAmount", goalAmount.toString());
    formData.append("deadline", deadline.toString());
    formData.append("image", image);

    try {
      // .then(newNews => onSetNews(currentNews => [...currentNews, newNews])
      await createProject(formData).unwrap();
      alert('Project was succesfully added');
      setName('');
      setDescription('');
      setGoalAmount(0);
      setDeadline('');
      setImage(null);
    } catch (error) {
      alert(`Щось пішло не так: ${(error as any).data.error}`);
    }
  }

  return (
    <section className={styles.section}>
    <div className="container">
        <form onSubmit={handleSubmit} className={styles.form}>
          <h4>Fill in for create Project</h4>
        <div className={styles.item}>
          <label>
            Project name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
                required
                placeholder='Enter a title'
              className={styles.title}
            />
          </label>
        </div>
        <div className={styles.item}>
          <label>
            Detailed project description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
                required
                placeholder='Enter a title'
              className={styles.title}
            />
          </label>
        </div>
        <div className={styles.item}>
          <label>
            goalAmount:
            <input
              type="number"
              min="0"
              value={goalAmount}
              onChange={(e) => setGoalAmount(+e.target.value)}
                required
                placeholder='Enter a title'
              className={styles.title}
            />
          </label>
          </div>
          
          <div className={styles.item}>
          <label>
            Project deadline date:
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
                required
                placeholder='Enter a date'
              className={styles.title}
            />
          </label>
        </div>

        <div className={styles.item}>
          <label>
            Image for project:
            <input type="file" onChange={handleFileChange} accept="image/*" required />
          </label>
        </div>
        <button type="submit" className={styles.btn}>Create Project</button>
      </form>
      </div>
    </section>
  );
};

export default CreateProjectForm;
