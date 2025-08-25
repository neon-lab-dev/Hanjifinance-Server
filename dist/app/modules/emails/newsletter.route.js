"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const newsletter_controller_1 = require("./newsletter.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_constannts_1 = require("../auth/auth.constannts");
const router = express_1.default.Router();
router.post("/subscribe", newsletter_controller_1.NewsletterControllers.addNewsletter);
router.get("/", (0, auth_1.default)(auth_constannts_1.UserRole.admin), newsletter_controller_1.NewsletterControllers.getAllNewsletters);
router.get("/:id", (0, auth_1.default)(auth_constannts_1.UserRole.admin), newsletter_controller_1.NewsletterControllers.getSingleNewsletterById);
router.put("/:id", (0, auth_1.default)(auth_constannts_1.UserRole.admin), newsletter_controller_1.NewsletterControllers.updateNewsletter);
router.delete("/:id", (0, auth_1.default)(auth_constannts_1.UserRole.admin), newsletter_controller_1.NewsletterControllers.deleteNewsletter);
exports.NewsletterRoutes = router;
