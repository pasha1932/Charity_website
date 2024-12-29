import { CONTENT_NEWS } from "@/shared/consts/contentNews";

const OtherNews = () => {
  return (
    <div className="content">
      <h4 className="title">Інші новини</h4>
      <div className="list">
        {CONTENT_NEWS.map(item => (
          <div className="item" key={item.title}>
            <div className="data">{item.date}</div>
            <p className="itemTitle">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default OtherNews;