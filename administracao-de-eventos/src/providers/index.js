import { ConfraternizationListProvider } from "./confraternizationList";
import { GraduationListProvider } from "./graduationList";
import { WeddingListProvider } from "./weddingList";

function Providers({ children }) {
  return (
    <WeddingListProvider>
      <ConfraternizationListProvider>
        <GraduationListProvider>{children}</GraduationListProvider>
      </ConfraternizationListProvider>
    </WeddingListProvider>
  );
}

export default Providers;
