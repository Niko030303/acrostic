interface DockItem {
  url: string;
  icon: string;
  title: string;
}

const DockBar = ({ list }: { list: DockItem[] }) => {
  return (
    <dock-wrapper id="dock">
      {list.map(({ icon, url, title }, index) => (
        <dock-item key={index}>
          <div className="item">
            <button title={title} className="">
              <a href={url} target="_blank">
                <i className={`text-xl ${icon}`}></i>
              </a>
            </button>
          </div>
        </dock-item>
      ))}
    </dock-wrapper>
  );
};

export default DockBar;
