

const PDF = () => {
  return (
    <div className="container">
      <iframe
        src={`${import.meta.env.BASE_URL}Aarohan_SQP_9th.pdf`}
        width="60%"
        style={{ border: 'none', height:'clamp(500px,80vh,800px)' }}
        allow='autoplay'
      />
    </div>
  );
};

export default PDF;
