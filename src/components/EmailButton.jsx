import { useState } from 'react';

export default function EmailButton() {
  const [buttonText, setButtonText] = useState('grab email');
  const email = 'joseph.r.martinez@gmail.com';

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Text copied to clipboard');
        setButtonText('email copied');
      },
      function () {
        console.log('Error copying text to clipboard');
      }
    );
  }

  return (
    <button
      className="items-center justify-center rounded-full duration-200 border border-negroni-500 inline-flex px-6 py-3 text-center w-full max-w-[220px] text-negroni-500 font-medium lg:w-[220px] hover:border-2"
      onClick={() => console.log("hi joe")}
    >
      {buttonText}
    </button>
  );
}