export default function Button({ children, onClick, className, variant = 'default', ...props }) {
    const baseStyles = "py-2 px-4";
    const variantStyles = {
        default: "border border-black text-dark hover:bg-black hover:text-white",
        primary: "bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}