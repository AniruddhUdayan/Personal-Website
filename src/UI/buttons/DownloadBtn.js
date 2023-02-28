import React from 'react';
import './DownloadBtn.css';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/UpdatedResume.pdf';

function DownloadBtn() {
  return (
    <a href={CV} download className="button" data-tooltip="Cv file: 45kb">
      <div className="button-wrapper"></div>
      <div className="text">Download CV</div>
      <span className="icon">
        <FaDownload />
      </span>
    </a>
  );
}

export default DownloadBtn;
