'use client';
import ArtBoard from '@/components/ArtBoard';
import { Button } from '@material-tailwind/react';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const TampletePage = () => {
  const artBoardRef = useRef(null);

  const handleDownloadPDF = async () => {
    if (!artBoardRef.current) return;

    const canvas = await html2canvas(artBoardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [794, 1123], // A4 size
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);
    pdf.save('artboard.pdf');
  };

  return (
    <div>
      <div className=''>
        <div className=' mt-10 '>
          <ArtBoard ref={artBoardRef} />
        </div>
        <div className='flex justify-center mt-5'>
          <Button
            onClick={handleDownloadPDF}
            variant='outlined'
            className='rounded-full'
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
  j;
};

export default TampletePage;
