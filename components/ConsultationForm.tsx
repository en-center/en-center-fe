"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { courseInterests, branches } from "@/lib/consultation-options";
import {
  submitConsultation,
  type ConsultationState,
} from "@/app/actions/consultation";
type Defaults = { course_interest: string; branch: string };
export default function ConsultationForm({
  defaults = { course_interest: "", branch: "" },
  contact,
}: {
  defaults?: Defaults;
  contact: React.ReactNode;
}) {
  const [version, setVersion] = useState(0);
  return (
    <Form
      key={version}
      defaults={defaults}
      contact={contact}
      onReset={() => setVersion((v) => v + 1)}
    />
  );
}
function Form({
  defaults,
  onReset,
  contact,
}: {
  defaults: Defaults;
  onReset: () => void;
  contact: React.ReactNode;
}) {
  const [values, setValues] = useState({
    parent_name: "",
    phone: "",
    ...defaults,
  });
  useEffect(() => {
    setValues((v) => ({ ...v, ...defaults }));
  }, [defaults.course_interest, defaults.branch]);
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const [state, action, pending] = useActionState(
    async (
      previous: ConsultationState,
      data: FormData,
    ): Promise<ConsultationState> => {
      try {
        return await submitConsultation(previous, data);
      } catch {
        return {
          success: false,
          message:
            "Kết nối chưa thành công. Ba mẹ vui lòng thử lại, thông tin vẫn được giữ nguyên.",
        };
      }
    },
    { success: false, message: "" },
  );
  useEffect(() => {
    if (state.errors) {
      const first = Object.keys(state.errors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    } else if (state.message) {
      messageRef.current?.focus();
    }
  }, [state]);
  const input =
    "mt-2 w-full rounded-2xl border border-brand-100 bg-brand-50/30 px-4 py-3.5 text-base text-forest outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30";
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <form
        ref={formRef}
        id="dang-ky"
        noValidate
        action={action}
        aria-busy={pending}
        className="rounded-2xl border border-white bg-white/90 p-6 shadow-xl shadow-brand-500/10 sm:p-8 lg:order-2"
      >
        <h2 className="text-2xl font-extrabold">Đăng ký tư vấn hoặc học thử</h2>
        <p className="mt-3 text-base leading-6 text-slate-600">
          Một bước nhỏ hôm nay, thêm tự tin cho con ngày mai.
        </p>
        {!state.success && (
          <fieldset
            disabled={pending}
            className="mt-6 space-y-5 disabled:opacity-60"
          >
            {(
              [
                {
                  name: "parent_name",
                  label: "Họ tên phụ huynh",
                  type: "text",
                  placeholder: "Ba mẹ cho Bloom biết tên nhé",
                  autoComplete: "name",
                },
                {
                  name: "phone",
                  label: "Số điện thoại",
                  type: "tel",
                  placeholder: "Số điện thoại của ba mẹ",
                  autoComplete: "tel",
                },
              ] as const
            ).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-base font-bold">
                  {field.label} <span className="text-amber-700">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  required
                  minLength={field.type === "text" ? 2 : undefined}
                  maxLength={field.type === "text" ? 80 : 20}
                  value={values[field.name]}
                  onChange={(event) =>
                    setValues({ ...values, [field.name]: event.target.value })
                  }
                  className={input}
                  aria-invalid={!!state.errors?.[field.name]}
                  aria-describedby={
                    state.errors?.[field.name]
                      ? `${field.name}-error`
                      : undefined
                  }
                />
                {state.errors?.[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-sm text-red-700"
                  >
                    {state.errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            {(
              [
                {
                  name: "course_interest",
                  label: "Khóa học quan tâm",
                  options: courseInterests,
                },
                { name: "branch", label: "Cơ sở gần nhất", options: branches },
              ] as const
            ).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-base font-bold">
                  {field.label} <span className="text-amber-700">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  required
                  value={values[field.name]}
                  onChange={(event) =>
                    setValues({ ...values, [field.name]: event.target.value })
                  }
                  className={input}
                  aria-invalid={!!state.errors?.[field.name]}
                  aria-describedby={
                    state.errors?.[field.name]
                      ? `${field.name}-error`
                      : undefined
                  }
                >
                  <option value="" disabled>
                    Chọn {field.label.toLowerCase()}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {state.errors?.[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-sm text-red-700"
                  >
                    {state.errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <button type="submit" disabled={pending} className="btn w-full">
              {pending ? (
                <>
                  <LoaderCircle className="animate-spin" size={18} />
                  Đang đăng ký...
                </>
              ) : (
                <>
                  Đăng ký tư vấn
                  <ArrowUpRight size={18} />
                </>
              )}
            </button>
          </fieldset>
        )}
        <div ref={messageRef} tabIndex={-1} role="status" aria-live="polite">
          {state.message && (
            <p
              className={`mt-6 rounded-2xl p-4 text-base leading-7 ${state.success ? "bg-brand-50 text-brand-800" : "bg-rose-50 text-rose-800"}`}
            >
              {state.success && <CheckCircle2 size={24} className="mb-3" />}
              {state.message}
            </p>
          )}
        </div>
        {state.success && (
          <button
            type="button"
            onClick={onReset}
            className="mt-5 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white hover:bg-brand-700"
          >
            Đăng ký khác
          </button>
        )}
        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck size={14} />
          Chưa lưu dữ liệu hoặc gửi đến trung tâm
        </p>
      </form>
      <section aria-labelledby="branches-heading" className="lg:order-1">
        {contact}
        <h2 id="branches-heading" className="text-2xl font-extrabold">
          Chọn cơ sở gần ba mẹ
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          Chọn khu vực thuận tiện cho gia đình để bắt đầu tìm lớp học phù hợp
          cho con.
        </p>
        <div className="mt-5 space-y-3">
          {branches.map((branch) => (
            <button
              type="button"
              key={branch.value}
              disabled={pending || state.success}
              aria-pressed={values.branch === branch.value}
              onClick={() => setValues({ ...values, branch: branch.value })}
              className={`card w-full p-5 text-left ${values.branch === branch.value ? "border-brand-600 bg-brand-50" : "hover:bg-brand-50"}`}
            >
              <span className="block font-bold">{branch.label}</span>
              <span className="mt-1 block text-slate-700">
                {branch.address}
              </span>
              <span className="mt-2 block text-sm font-bold text-brand-700">
                {values.branch === branch.value ? "Đã chọn" : "Chọn cơ sở này"}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
