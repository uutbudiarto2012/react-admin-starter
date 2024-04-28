import useBreadcrumbs from "use-react-router-breadcrumbs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

export function MyBreadcrumb() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map(({ breadcrumb, match }, index) => {
          return (
            <Fragment key={match.pathname}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem >
                {
                  breadcrumbs.length === index + 1 ? (
                    <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <NavLink className="underline text-slate-800 font-semibold" to={match.pathname}>{breadcrumb}</NavLink>
                    </BreadcrumbLink>
                  )
                }
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
