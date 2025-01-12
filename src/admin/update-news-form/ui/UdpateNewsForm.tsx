import { News, useGetNewsItemQuery, useUpdateNewsCoverImageMutation, useUpdateNewsTextMutation } from "@/widgets/news/api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';

const UpdateNewsForm = () => {
  const { id } = useParams();
  console.log(id)
  const [updateNewsText] = useUpdateNewsTextMutation();
  const [updateNewsImage] = useUpdateNewsCoverImageMutation();
  const { data } = useGetNewsItemQuery({ id: id?.toString() })
  const [title, setTitle] = useState(data?.title);
  const [content, setContent] = useState(data?.content);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  
  const update = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if (!title || !content || !coverImage ||  title.length < 10) {
        alert("Please fill in all fields correctly and upload a cover image.");
        return;
      }
  
      const newsItem = {
        id: id as string,
        title,
        content,
      };
  
      const formData = new FormData();
      formData.append("coverImage", coverImage);
  
      try {
        await updateNewsText(newsItem).unwrap();
        await updateNewsImage({ id: id as string, formData }).unwrap();
        alert('News was succesfully edited');
        setTitle('');
        setContent('');
        setCoverImage(null);
      } catch (error) {
        console.error('Failed to update news:', error);
      }
    }
  
  console.log(data)
  return (
    <section className={styles.section}>
      <div className="container">
        {data ? (<form onSubmit={update} className={styles.form}>
          <h4>Fill in for update News</h4>

          <div className={styles.item}>
            <label>
              Title:
              <input
                type="text"
                defaultValue={data.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                defaultValue={data.content}
              ></textarea>
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Cover Image:
              <input type="file" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} accept="image/*" required />
            </label>
          </div>
          <button className={styles.btn}>Update News</button>
        </form>) : <h2>EF</h2>}
      </div>
      </section>
   );
}
 
export default UpdateNewsForm;