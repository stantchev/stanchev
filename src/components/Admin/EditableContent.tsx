import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useSiteContentStore } from '../../store/siteContentStore';
import TextEditor from './TextEditor';

interface EditableContentProps {
  id: string;
  className?: string;
}

const EditableContent: React.FC<EditableContentProps> = ({ id, className = '' }) => {
  const { isAuthenticated } = useAuth();
  const { getSection, updateSection } = useSiteContentStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(getSection(id));

  if (!isAuthenticated) {
    return <div className={className}>{getSection(id)}</div>;
  }

  const handleSave = () => {
    updateSection(id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className={className}>
      <TextEditor
        content={editedContent}
        onChange={setEditedContent}
        onSave={handleSave}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(!isEditing)}
      />
    </div>
  );
};

export default EditableContent;