import './DownloadButton.css'

const DownloadButton = () => {
  return (
    <div className='button'>
    <a  href="./Aarohan_SQP_9th.pdf" download="Brochure.pdf">
        Download PDF
    </a>
   </div>
  );
};

export default DownloadButton;
