import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailEditor.module.scss';
import { useRef, useState } from 'react';
import { applyFormat, FormatType } from './EmailFormat';
import parse from 'html-react-parser';
export function EmailEditor() {
  const [text, setText] = useState(`Hey!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Exercitationem aut veniam voluptatum odit,
  reprehenderit veritatis neque inventore perspiciatis voluptate quas, 
  explicabo optio, maxime molestiae ea a? Accusamus molestias pariatur reiciendis.`);
  
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const handleFormat = (type: FormatType) => {
    if (selectionStart === null || selectionEnd === null || selectionStart === selectionEnd) {
      return; // Не выделено текста
    }

    const selectedText = text.substring(selectionStart, selectionEnd);
    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);

    const formattedText = applyFormat(type, selectedText);

    setText(before + formattedText + after);
  };

  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
      {parse(text)}

        <textarea
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textRef}
        />
        <div className={styles.action}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser size={17} /></button>
            <button onClick={() => handleFormat('bold')}><Bold size={17} /></button>
            <button onClick={() => handleFormat('italic')}><Italic size={17} /></button>
            <button onClick={() => handleFormat('underline')}><Underline size={17} /></button>
          </div>
          <button>Send Now</button>
        </div>
      </div>
    </div>
  );
}
