import { DataTable } from "../organisms/data-table/data-table";
import { Button, Card, CardContent, CardHeader, Checkbox } from "../ui";
import { useGetTasks } from "@/hooks/react-query/useTasks";
import { ThreeDotsLoader } from "../mocules/three-dot-loader";
import { PlusIcon } from "lucide-react";
import { FormTask } from "../organisms/form-task";
import { useState } from "react";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Task } from "@/lib/types";
import { TaskPriority, TaskStatus } from "@/lib/enums";
import { DataTableColumnHeader } from "../organisms/data-table/column-header";
import { DataTableRowActions } from "../organisms/data-table/row-actions";

export default function TaskPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { data: tasks, isPending } = useGetTasks();
  const [selectedTask, setSelectedTask] = useState<Task>();

  const columns = getColumns(({ row }) => {
    setIsSheetOpen(true);
    setSelectedTask(row.original);
  });

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      {isPending ? (
        <ThreeDotsLoader />
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks for this month!
                </p>
              </div>
              <Button onClick={() => setIsSheetOpen(true)}>
                <PlusIcon /> Add Task
              </Button>
              <FormTask open={isSheetOpen} onOpenChange={setIsSheetOpen} task={selectedTask} />
            </div>
          </CardHeader>
          <CardContent>
            {tasks ? <DataTable data={tasks} columns={columns} /> : <div>No tasks found</div>}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

const getColumns = (onEdit: ({ row }: { row: Row<Task> }) => void) => {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">{row.getValue("name")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const status = Object.entries(TaskStatus).find(
          ([_, value]) => value === row.getValue("status")
        );
        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            <span>{status[0]}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "priorityLevel",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
      cell: ({ row }) => {
        const priority = Object.entries(TaskPriority).find(
          ([_, value]) => value === row.getValue("priorityLevel")
        );

        if (!priority) {
          return null;
        }

        return (
          <div className="flex items-center">
            <span>{priority[0]}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} onEdit={() => onEdit({ row })} />,
    },
  ] as ColumnDef<Task>[];
};
