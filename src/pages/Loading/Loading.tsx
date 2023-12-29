import { RadioGroupFormSkeleton } from "@/components/shared/radioGroupFormSkeleton/RadioGroupFormSkeleton.component";

export default function Loading() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}>
          <RadioGroupFormSkeleton />
        </div>
      ))}
    </>
  );
}
