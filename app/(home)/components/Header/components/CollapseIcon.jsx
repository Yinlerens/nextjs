import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {useStore} from "@/store/index.js";
import {observer} from "mobx-react-lite";
const CollapseIcon = () => {
const{menuStore:{isCollapse,updateCollapse}}=	useStore()
	return (
		<div
			className="collapsed"
			onClick={() => {
				updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default observer(CollapseIcon);
