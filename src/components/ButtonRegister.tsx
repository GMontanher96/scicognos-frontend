interface ButtonRegisterProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}



export default function ButtonRegister(props: ButtonRegisterProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px6 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}