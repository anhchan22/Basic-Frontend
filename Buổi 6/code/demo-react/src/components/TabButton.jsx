
export function TabButton({ children, onClick, isActive }) {
    return (
            <button className={isActive ? 'active' : ''} onClick={onClick}>
                {children}
            </button>
    );
}