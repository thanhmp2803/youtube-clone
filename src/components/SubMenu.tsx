interface ISubMenuItem {
  id: string
  title: string
  icon: React.ReactNode
  url: string
}

interface ISubMenuProps {
  collapsed?: boolean
  items: ISubMenuItem[]
}

export const SubMenu = ({ items, collapsed = false }: ISubMenuProps) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.url} className="nav-link text-dark d-flex align-items-center sidebar-hover">
            {item.icon}
            {!collapsed && <span>{item.title}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
