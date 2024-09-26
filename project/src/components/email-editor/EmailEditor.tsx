import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useRef, useState } from 'react'
import { applyFormat, FormatType } from './EmailFormat';
import parse from 'html-react-parser';

export function EmailEditor() {
  const [text, setText] = useState(`Hey!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Exercitationem aut veniam voluptatum odit,
  reprehenderit veritatis neque inventore perspiciatis voluptate quas, 
  explicabo optio, maxime molestiae ea a? Accusamus molestias pariatur reiciendis.`);

  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const handleFormat = (type: FormatType) => {
    if (!textRef.current) return
    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;
    const selectedText = text.substring(cursorStart, cursorEnd);

    const before = text.substring(0, cursorStart);
    const after = text.substring(cursorEnd);

    setText(before + applyFormat(type, selectedText) + after);
  }
  return (

    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <textarea
          className={styles.editor}
          spellCheck='false'
          // onClick={handleFormat}
          value={text}
          onChange={e => setText(e.target.value)}
          ref={textRef}
        >
          {text}
        </textarea>
        <div className={styles.action}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser size={17} /></button>
            <button><Bold size={17} /></button>
            <button><Italic size={17} /></button>
            <button><Underline size={17} /></button>
          </div>
          <button>Send Now</button>
        </div>
      </div>
    </div>
  )
}


