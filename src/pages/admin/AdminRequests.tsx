import React, { useEffect, useState } from 'react';
import CyberCard from '../../components/UI/CyberCard';
import Button from '../../components/UI/Button';

interface Request {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: string;
  pinned: string;
  deletedAt?: string;
}

const AdminRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [filter, setFilter] = useState<'всички' | 'готово' | 'изтрити'>('всички');

  const fetchRequests = async () => {
    try {
      const res = await fetch('/.netlify/functions/get-requests');
      const data = await res.json();
      console.log('Получени заявки:', data);
      setRequests(data || []);
    } catch (error) {
      console.error('Грешка при заявките:', error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleUpdate = async (id: number, updates: Record<string, string>) => {
    await fetch('/.netlify/functions/update-request', {
      method: 'POST',
      body: JSON.stringify({ id, updates }),
    });
    fetchRequests();
  };

  const filteredRequests = requests
    .filter((req) => {
      const now = new Date();
      const deletedDate = req.deletedAt ? new Date(req.deletedAt) : null;
      const daysSinceDeleted = deletedDate ? (now.getTime() - deletedDate.getTime()) / (1000 * 60 * 60 * 24) : 0;

      if (deletedDate && daysSinceDeleted > 30) return false;

      switch (filter) {
        case 'готово':
          return req.status === 'готово' && !deletedDate;
        case 'изтрити':
          return !!deletedDate;
        default:
          return !deletedDate;
      }
    })
    .sort((a, b) => {
      if (a.pinned === 'true') return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">
        <span className="neon-text">Заявки</span> от формата за контакт
      </h1>

      <div className="mb-6 space-x-4">
        <Button variant={filter === 'всички' ? 'primary' : 'outline'} onClick={() => setFilter('всички')}>
          Всички
        </Button>
        <Button variant={filter === 'готово' ? 'primary' : 'outline'} onClick={() => setFilter('готово')}>
          Готови
        </Button>
        <Button variant={filter === 'изтрити' ? 'primary' : 'outline'} onClick={() => setFilter('изтрити')}>
          Изтрити
        </Button>
      </div>

      {filteredRequests.map((req) => (
        <CyberCard key={req.id} glowColor={req.pinned === 'true' ? 'yellow' : 'blue'} className="mb-6">
          <div className="mb-4">
            <p><strong>Име:</strong> {req.name}</p>
            <p><strong>Имейл:</strong> {req.email}</p>
            <p><strong>Телефон:</strong> {req.phone}</p>
            <p><strong>Тема:</strong> {req.subject}</p>
            <p><strong>Съобщение:</strong> {req.message}</p>
            <p><strong>Дата:</strong> {req.date}</p>
          </div>
          <div className="space-x-3">
            <Button variant="success" onClick={() => handleUpdate(req.id, { Status: 'готово' })}>
              Готово
            </Button>
            <Button variant="destructive" onClick={() => handleUpdate(req.id, { DeletedAt: new Date().toISOString() })}>
              Изтрий
            </Button>
            <Button variant="secondary" onClick={() => handleUpdate(req.id, { Pinned: req.pinned === 'true' ? 'false' : 'true' })}>
              Закачи
            </Button>
          </div>
        </CyberCard>
      ))}
    </div>
  );
};

export default AdminRequestsPage;
