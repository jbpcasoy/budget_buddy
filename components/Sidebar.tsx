interface SidebarItem {
  label: string;
  url: string;
}

export default function Sidebar() {
  const items: SidebarItem[] = [
    { label: "Home", url: "/" },
    { label: "Expenses", url: "/expenses" },
    { label: "Account", url: "/account" },
  ];
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <a href={item.url}>{item.label}</a>
          </div>
        );
      })}
    </div>
  );
}
