import user from "./api/v1/controller/user/routes";
import admin from "./api/v1/controller/admin/routes";
import shop from "./api/v1/controller/shop/routes";
import category from "./api/v1/controller/category/routes"
import product from "./api/v1/controller/product/routes";
import chat from "./api/v1/controller/chats/routes"
import hospital from "./api/v1/controller/hospital/routes";
import doctor from "./api/v1/controller/doctor/routes";




export default function routes(app) {
    app.use('/api/v1/user', user)
    app.use("/api/v1/admin", admin)
    app.use("/api/v1/shop", shop)
    app.use("/api/v1/category", category)
    app.use("/api/v1/product", product)
    app.use("/api/v1/chats", chat)
    app.use("/api/v1/hospital", hospital)
    app.use("/api/v1/doctor", doctor)




}