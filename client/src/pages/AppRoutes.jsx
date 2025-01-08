import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import { CreateForm as CreateMonkey } from "./Monkeys/CreateForm";
import { UpdateForm as UpdateMonkey } from "./Monkeys/UpdateForm";
import { View as ViewMonkey } from "./Monkeys/View";
import { ViewAll as ViewAllMonkeys } from "./Monkeys/ViewAll";
import { Created as CreatedMonkey } from "./Monkeys/Created";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/monkey-create" element={<CreateMonkey />} />
          <Route path="/monkey-edit/:id" element={<UpdateMonkey />} />
          <Route path="/monkey-view/:id" element={<ViewMonkey />} />
          <Route path="/monkey-viewall" element={<ViewAllMonkeys />} />
          <Route path="/created-monkey/:id" element={<CreatedMonkey />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
