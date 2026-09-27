"use server";
import { courseInterests, branches } from "@/lib/consultation-options";
export type ConsultationState = {
  success: boolean;
  message: string;
  values?: Record<
    "parent_name" | "phone" | "course_interest" | "branch",
    string
  >;
  errors?: Partial<
    Record<"parent_name" | "phone" | "course_interest" | "branch", string>
  >;
};
export async function submitConsultation(
  _previous: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const read = (key: string) => {
    const entries = formData.getAll(key);
    return entries.length === 1 && typeof entries[0] === "string"
      ? entries[0]
      : "";
  };
  const parentName = read("parent_name").trim();
  const phone = read("phone").replace(/[\s().-]/g, "");
  const courseInterest = read("course_interest");
  const branch = read("branch");
  const errors: NonNullable<ConsultationState["errors"]> = {};
  if (parentName.length < 2 || parentName.length > 80)
    errors.parent_name = "Vui lòng nhập tên phụ huynh từ 2 đến 80 ký tự.";
  if (!/^(0|\+84)[35789]\d{8}$/.test(phone))
    errors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
  if (!courseInterests.some((option) => option.value === courseInterest))
    errors.course_interest = "Vui lòng chọn khóa học quan tâm.";
  if (!branches.some((option) => option.value === branch))
    errors.branch = "Vui lòng chọn cơ sở gần nhất.";
  if (Object.keys(errors).length)
    return {
      success: false,
      message: "Ba mẹ vui lòng kiểm tra lại thông tin bên dưới.",
      errors,
      values: {
        parent_name: parentName,
        phone: read("phone"),
        course_interest: courseInterest,
        branch,
      },
    };
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: `Cảm ơn phụ huynh ${parentName}! Đăng ký tư vấn cho con đã hoàn tất bước kiểm tra thông tin. Thông tin chưa được lưu hoặc gửi đến trung tâm.`,
  };
}
