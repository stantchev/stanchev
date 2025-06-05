import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered, Heading } from 'lucide-react';
import Button from '../UI/Button';

interface TextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave: () => void;
  isEditing: boolean;
  onToggleEdit: () => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  content,
  onChange,
  onSave,
  isEditing,
  onToggleEdit,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editable: isEditing,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="relative group">
      {isEditing ? (
        <div className="mb-4 space-x-2 flex items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'bg-cyber-purple/20' : ''}
          >
            <Bold size={16} />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'bg-cyber-purple/20' : ''}
          >
            <Italic size={16} />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-cyber-purple/20' : ''}
          >
            <List size={16} />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-cyber-purple/20' : ''}
          >
            <ListOrdered size={16} />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-cyber-purple/20' : ''}
          >
            <Heading size={16} />
          </Button>
          <div className="ml-auto space-x-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onToggleEdit}
            >
              Отказ
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={onSave}
            >
              Запази
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={onToggleEdit}
          className="absolute -top-4 -right-4 bg-cyber-purple text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Bold size={16} />
        </button>
      )}
      <EditorContent editor={editor} className="prose prose-invert max-w-none" />
    </div>
  );
};

export default TextEditor;