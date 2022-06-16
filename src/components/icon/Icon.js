const Icon = ({icon, className, href = "https://facebook.com"}) => (
    <div className={className}>
        <a target="_blank" href={href}>
        {icon}
        </a>
    </div>
)

export default Icon