export default function RecipeCard({children, showDetails, onClose}) {
    if (!showDetails) return null;
    
    return (
        <div className = "recipe-card"
            onClick = {onClose}>
            <div className="recipe-content"
                onClick = {e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}