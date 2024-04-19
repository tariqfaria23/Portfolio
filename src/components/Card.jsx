const Card = ({ name, text, id, skillId, index }) => {
  return (
      <article className="box-container">
          { id==skillId ?
            <div className={index%2==1?'box-even box':'box-odd box'}>
                <div className="text-container">
                <p className="name">{name}</p>
                <p className="text">{text}</p>
                </div>
            </div> : ''}
      </article>
  );
};

export default Card;