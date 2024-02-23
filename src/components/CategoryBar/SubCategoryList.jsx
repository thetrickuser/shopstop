const SubCategoryList = (props) => {
  return (
    <>
      {props.data &&
        props.data.map((category) => (
          <div key={category.title}>{category.title}</div>
        ))}
    </>
  );
};

export default SubCategoryList;
