import './PageContainer.css';

export function PageContainer({ children }) {

  return (
    <div className="page-container">
      {children}
    </div>
  );
}