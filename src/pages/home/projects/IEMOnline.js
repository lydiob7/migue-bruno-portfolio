import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection, VideosList } from 'components';

const IEMOnline = ({ id, openTab, ...props }) => {
    const { getPostsById } = useContextInfo();

    return (
        <ExpandableSection {...props} id={id} title="IEM Online" openTab={openTab}>
            <>
                <p className="py-2">
                    El Instituto de Educación Musical (IEM) es una asociación de profesores creada y dirigida por Emilio
                    Molina, a la cual pertenezco, que se centra en promover y potenciar un sistema pedagógico para el
                    aprendizaje y la enseñanza de la música basado en el desarrollo integral de la creatividad y de la
                    imaginación, y en la improvisación entendida como control del lenguaje musical.
                </p>
                <p className="py-2">
                    Trabajo de pianista acompañante habitual de distintos coros de la provincia de Valencia, y en los
                    últimos años fui profesor de piano, lenguaje musical e improvisación en *Voluta Escola de Música*
                    (Alboraya). Compongo, hago arreglos, transcripciones, *backing tracks*… en esta web podréis ver y
                    escuchar algunos de mis trabajos.
                </p>
                <a
                    className="flex items-center my-8"
                    href="https://www.metodoiem.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visita la web{' '}
                    <svg
                        className="ml-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 0C7.93566 0 5.18864 1.13785 3.16325 3.16325C1.13785 5.18864 0 7.93566 0 10.8C0 13.6643 1.13785 16.4114 3.16325 18.4368C5.18864 20.4621 7.93566 21.6 10.8 21.6C13.6643 21.6 16.4114 20.4621 18.4368 18.4368C20.4621 16.4114 21.6 13.6643 21.6 10.8C21.6 7.93566 20.4621 5.18864 18.4368 3.16325C16.4114 1.13785 13.6643 0 10.8 0V0ZM1.332 11.616H4.344C4.392 12.708 4.5444 13.7928 4.8 14.856H2.208C1.72465 13.8371 1.42795 12.7397 1.332 11.616ZM11.616 5.136V1.428C12.7724 1.86747 13.7227 2.72355 14.28 3.828C14.526 4.2444 14.7432 4.6776 14.928 5.124L11.616 5.136ZM15.48 6.756C15.7584 7.8156 15.924 8.9016 15.972 9.996H11.616V6.756H15.48ZM9.984 1.428V5.136H6.672C6.85711 4.68924 7.07366 4.25615 7.32 3.84C7.87496 2.73102 8.82551 1.87039 9.984 1.428ZM9.984 6.756V9.996H5.64C5.688 8.9016 5.8536 7.8156 6.132 6.756H9.984ZM4.344 9.984H1.332C1.42795 8.86031 1.72465 7.76294 2.208 6.744H4.8C4.54391 7.80678 4.3912 8.89183 4.344 9.984ZM5.64 11.616H9.984V14.856H6.132C5.85364 13.7965 5.68872 12.7104 5.64 11.616ZM9.996 16.416V20.124C8.83958 19.6845 7.88934 18.8285 7.332 17.724C7.08566 17.3079 6.86911 16.8748 6.684 16.428L9.996 16.416ZM11.616 20.124V16.476H14.928C14.7429 16.9228 14.5263 17.3559 14.28 17.772C13.7227 18.8765 12.7724 19.7325 11.616 20.172V20.124ZM11.616 14.796V11.556H15.96C15.9113 12.6504 15.7464 13.7365 15.468 14.796H11.616ZM17.268 11.556H20.28C20.184 12.6797 19.8874 13.7771 19.404 14.796H16.8C17.052 13.752 17.2044 12.6876 17.256 11.616L17.268 11.556ZM17.268 9.936C17.213 8.86357 17.0563 7.79879 16.8 6.756H19.392C19.8756 7.776 20.172 8.8728 20.268 9.996L17.268 9.936ZM18.468 5.136H16.32C15.9313 4.04436 15.368 3.02307 14.652 2.112C16.1453 2.7823 17.4423 3.82326 18.42 5.136H18.468ZM6.948 2.112C6.23198 3.02307 5.66865 4.04436 5.28 5.136H3.18C4.15767 3.82326 5.45474 2.7823 6.948 2.112ZM3.168 16.512H5.28C5.66865 17.6036 6.23198 18.6249 6.948 19.536C5.45061 18.8556 4.15314 17.8019 3.18 16.476L3.168 16.512ZM14.64 19.536C15.356 18.6249 15.9193 17.6036 16.308 16.512H18.42C17.4364 17.8072 16.1398 18.8312 14.652 19.488L14.64 19.536Z"
                            fill="black"
                        />
                    </svg>
                </a>

                <div>
                    <VideosList videos={getPostsById(id)} />
                </div>
            </>
        </ExpandableSection>
    );
};

export default IEMOnline;
