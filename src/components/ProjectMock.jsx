import tilalShot from "../assets/images/tilal-almustaqbal.png";
import schoolShot from "../assets/images/smart-school.png";
import shopShot from "../assets/images/freshcart.png";
import bagsShot from "../assets/images/cairo-bags.png";

function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#09090f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[10px] text-zinc-500">
          {url}
        </div>
      </div>
      <div className="aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

function SchoolMock() {
  return (
    <BrowserFrame url="smart-school-frontend-wine.vercel.app">
      <img
        src={schoolShot}
        alt="Smart School admin dashboard"
        className="h-full w-full object-cover object-top"
      />
    </BrowserFrame>
  );
}

function ShopMock() {
  return (
    <BrowserFrame url="ecommerce-project-ten-teal.vercel.app">
      <img
        src={shopShot}
        alt="FreshCart storefront"
        className="h-full w-full object-cover object-top"
      />
    </BrowserFrame>
  );
}

function TelalMock() {
  return (
    <BrowserFrame url="tilalalmustaqbal.com/en">
      <img
        src={tilalShot}
        alt="Tilal Almustaqbal live website"
        className="h-full w-full object-cover object-[center_18%]"
      />
    </BrowserFrame>
  );
}

function BagsMock() {
  return (
    <BrowserFrame url="cairo-bags.vercel.app">
      <img
        src={bagsShot}
        alt="Cairo Bags storefront"
        className="h-full w-full object-cover object-top"
      />
    </BrowserFrame>
  );
}

const mocks = {
  school: SchoolMock,
  shop: ShopMock,
  bags: BagsMock,
  telal: TelalMock,
};

function ProjectMock({ theme }) {
  const Mock = mocks[theme] ?? SchoolMock;
  return <Mock />;
}

export default ProjectMock;
