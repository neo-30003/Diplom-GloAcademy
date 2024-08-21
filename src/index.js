import modalRequest from "./modules/modalRequest";
import { benefitsSlider, serviceSlider } from "./modules/sliders";
import serviceModal from "./modules/serviceModal";
import timer from "./modules/timer";
import sendForm from "./modules/sendForm";
import validateForm from "./modules/validateForm";
import certificates from "./modules/certificates";
import scroll from "./modules/scroll";

modalRequest();
benefitsSlider();
serviceSlider();
serviceModal();
timer("10 september 2024");
sendForm();
validateForm();
certificates();
scroll();
