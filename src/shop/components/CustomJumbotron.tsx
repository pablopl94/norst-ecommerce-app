import { useTranslation } from "react-i18next"

export const CustomJumbotron = () => {

    const { t } = useTranslation()

    return (
        <>
            {/* Hero Section */}
            <section className="py-10 px-4 lg:px-8 bg-muted/30">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl lg:text-5xl font-thin tracking-tight mb-6">
                        {t("brand.title")}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                        {t("brand.subtitle")}
                    </p>
                </div>
            </section>
        </>
    )
}
