"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import countCharacters from "@/helper/countCharachter";
import sliceAndAddEllipsis from "@/helper/sliceAndAddEllipsis";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  type: z.enum(["first", "second", "third", "fourth"], {
    required_error: "You need to select a option.",
  }),
});

export function RadioGroupForm({ item }) {
  const [selected, setSelected] = useState<null | string>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [showCorrect, setShowCorrect] = useState<boolean>(false);
  const [showFullText, setShowFullText] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setShowCorrect(true);
    form.reset();
  }

  useEffect(() => {
    if (item && item.correctAnswer) {
      setIsCorrect(selected === item.correctAnswer);
    }
  }, [item, selected]);

  return (
    <div className="max-w-md   mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="mb-12 w-full text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
                  {!showFullText && countCharacters(item.question) >= 35 ? (
                    <span
                      onClick={() => setShowFullText((prev) => !prev)}
                      className="underline"
                    >
                      {sliceAndAddEllipsis(item.question, 35)}
                    </span>
                  ) : (
                    <span onClick={() => setShowFullText((prev) => !prev)}>
                      {item.question}
                    </span>
                  )}

                  {/* {showFullText && (
                    <span onClick={() => setShowFullText((prev) => !prev)}>
                      {item.question}
                    </span>
                  )} */}
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(newState) => {
                      field.onChange(newState);
                      setSelected(newState);
                    }}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                    disabled={showCorrect}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-gray-200 rounded">
                      <FormControl>
                        <RadioGroupItem value="first" />
                      </FormControl>
                      <FormLabel className="font-normal leading-relaxed	">
                        {item.options.first}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-gray-200 rounded">
                      <FormControl>
                        <RadioGroupItem value="second" />
                      </FormControl>
                      <FormLabel className="font-normal leading-relaxed	">
                        {item.options.second}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-gray-200 rounded">
                      <FormControl>
                        <RadioGroupItem value="third" />
                      </FormControl>
                      <FormLabel className="font-normal leading-relaxed	">
                        {item.options.third}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-gray-200 rounded">
                      <FormControl>
                        <RadioGroupItem value="fourth" />
                      </FormControl>
                      <FormLabel className="font-normal leading-relaxed	">
                        {item.options.fourth}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {showCorrect && (
            <div
              className={`${
                isCorrect ? "text-green-600" : "text-red-600"
              } pl-3`}
            >
              <p>
                {isCorrect ? "Correct :" : "Correct ans is :"}{" "}
                {item.options[item.correctAnswer]}
              </p>
            </div>
          )}

          <Button disabled={showCorrect} type="submit" className="mb-auto">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
