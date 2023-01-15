type color = "disabled" | "action" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
interface ISvgIcon{
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    color?:color
}
export default ISvgIcon