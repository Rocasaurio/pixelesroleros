import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {"Síguenos en: "}
          <a href="https://www.instagram.com/rocasaurio_/">Instagram</a> | <a href="https://www.instagram.com/rocasaurio_/">Facebook</a>
        </p>
        <p>
          {"Creado por "}
          <a href="https://www.instagram.com/rocasaurio_/">@Rocasaurio_</a> © {year}
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
